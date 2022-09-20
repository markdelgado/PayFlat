class CreateLandlords < ActiveRecord::Migration[7.0]
  def change
    create_table :landlords do |t|
      t.integer :user_id

      t.timestamps
    end
  end
end
