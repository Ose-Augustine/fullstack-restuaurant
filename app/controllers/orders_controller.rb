require 'httparty' 
class OrdersController < ApplicationController
    respond_to :json 

    def new
        food = Food.find_by(name: params[:food])
        drink = Drink.find_by(name: params[:drink])
        Order.create(
            food_id: food[:id],  
            drink_id: drink[:id]
        )
        return {success: true, message:"Order created successfully"}.to_json 
    end

    private
    def user_params 
        params.permit(:food,:drink)
    end
end
