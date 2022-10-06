class CreateUnits < ActiveRecord::Migration[7.0]
  def change
    create_table :units do |t|
     
      t.integer :property_id
      t.integer :tenant_id
      t.string :tenant_name
      t.string :apartment_num
      t.string :tenant_phone
      t.string :price
      t.date :lease_start_date
      t.date :lease_end_date
      t.string :sqft
      t.integer :bed
      t.string :bath
      t.boolean :vacant

      t.timestamps
    end
  end
end
