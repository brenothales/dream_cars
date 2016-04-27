class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.string :make, null: false
      t.string :model, null: false
      t.string :year, null: false

      t.timestamps null: false
    end

    add_index :cars, %i(make model year), unique: true
  end
end
