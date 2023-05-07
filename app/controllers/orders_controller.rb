class OrdersController < ApplicationController
    def new
        food = Food.find_by(name: params[:food])
        drink = Drink.find_by(name: params[:drink])
        Order.create(
            food_id: food[:id],  
            drink_id: drink[:id]
        )
    end

    private
    def user_params 
        params.permit(:food,:drink)
    end
end
