class Api::ToppingsController < ApplicationController
  before_action :set_cream

  def index
    render json: @cream.toppings
    # Cream.find(1).toppins.all
  end


  private

  def set_cream
    @cream = Cream.find(params[:cream_id])
  end

end
