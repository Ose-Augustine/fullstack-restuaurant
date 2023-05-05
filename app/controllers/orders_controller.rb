class OrdersController < ApplicationController
    def new
        begin
            Order.create(
                food_id: Food.find_by(name: params[:food]).id, 
                drink_id: Drink.find_by(name: params[:drink]).id
            )
        rescue 
            render 'Check credentials properly', status: :unprocessable_entity
        end
    end

    private
    def user_params
        params.permit(:food,:drink)
    end
end
