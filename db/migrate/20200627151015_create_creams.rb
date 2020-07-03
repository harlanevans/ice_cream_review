class CreateCreams < ActiveRecord::Migration[6.0]
  def change
    create_table :creams do |t|
      t.string :flavor_profile
      t.string :served_in

      t.timestamps
    end
  end
end
