class AddUsernameToManagers < ActiveRecord::Migration[6.0]
  def change
    add_column :managers, :name, :text
    add_index :managers, :name
  end
end
