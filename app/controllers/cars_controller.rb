class CarsController < ApplicationController
  def index
    @cars = Car.all

    render json: @cars
  end

  def create
    @car = Car.new(car_params)

    if @car.save
      render json: @car, status: :created, location: @car
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  private
    
  def car_params
    params.require(:car).permit(:year, :make, :model)
  end
end
