class Api::CreamsController < ApplicationController

  def index
    render json: Cream.all
  end

  def show
    render json: Cream.find(params[:id])
  end
  
  def create 
    cream = Cream.new(cream_params)
    if cream.save
      render json: cream
    else
      render json: { message: "Unable to create Cream" }
    end
  end
  
  def update
    cream = Cream.find(params[:id])
    binding.pry
    if cream.update(cream_params)
      render json: cream
    else
      render json: { message: "Unable to edit Cream" }
    end
  end
  
  def destroy
    Cream.find(params[:id]).destroy
    render json: { message: "DESTROYED CREAM" }
  end

  private

  def cream_params
    params.require(:cream).permit(:flavor_profile, :served_in)
  end



end
