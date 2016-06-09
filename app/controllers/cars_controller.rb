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

  def show
    @car = Car.find(params[:id])

    render json: @car
  end

  def update
    @car = Car.find(params[:id])

    if @car.update(car_params)
      render json: @car, location: @car
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @car = Car.find(params[:id])
    @car.destroy
  end

  private
    
  def car_params
    params.require(:car).permit(:year, :make, :model)
  end
end
