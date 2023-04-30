class CreateDrinks < ActiveRecord::Migration[7.0]
  def change
    create_table :drinks do |t|
      t.string :name
      t.string :info
      t.string :image
      t.decimal :price
      
      t.timestamps
    end
  end
end
