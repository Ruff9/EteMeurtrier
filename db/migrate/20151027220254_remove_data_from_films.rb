class RemoveDataFromFilms < ActiveRecord::Migration
  def change
  	remove_column :films, :realisateur1
  	remove_column :films, :realisateur2
  	remove_column :films, :chef_operateur
  	remove_column :films, :avec1
  	remove_column :films, :avec2
  end
end
