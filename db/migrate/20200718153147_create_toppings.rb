class CreateToppings < ActiveRecord::Migration[6.0]
  def change
    create_table :toppings do |t|
      t.string :name
      t.belongs_to :cream, null: false, foreign_key: true

      t.timestamps
    end
  end
end
