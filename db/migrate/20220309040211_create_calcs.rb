class CreateCalcs < ActiveRecord::Migration[6.0]
  def change
    create_table :calcs do |t|
      t.integer :ten_thousand, null: false
      t.integer :five_thousand, null: false
      t.integer :one_thousand, null: false
      t.integer :five_hundred, null: false
      t.integer :one_hundred, null: false
      t.integer :fifty, null: false
      t.integer :ten, null: false
      t.integer :five, null: false
      t.integer :one, null: false
      t.timestamps
    end
  end
end
