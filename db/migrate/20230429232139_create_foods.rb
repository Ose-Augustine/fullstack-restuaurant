class CreateFoods < ActiveRecord::Migration[7.0]
  def change
    create_table :foods do |t|
      t.string :name
      t.string :about
      t.string :image
      t.string :category
      t.decimal :price

      t.timestamps
    end
  end
end
