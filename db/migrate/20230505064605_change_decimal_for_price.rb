class ChangeDecimalForPrice < ActiveRecord::Migration[7.0]
  def change
    def up 
      change_column :drinks, :price, :numeric
    end

    def down
      change_column :drinks, :price, :decimal
    end 
  end
end
