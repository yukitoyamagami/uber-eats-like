class CreateLineFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :line_foods do |t|
      t.integer :count, null: false, default: 0
      t.boolean :active, null: false, default: false
      t.references :food, null: false, foreign_key: true
      t.references :restaurant, null: false, foreign_key: true
      t.references :order, foreign_key: true
    end
  end
end
