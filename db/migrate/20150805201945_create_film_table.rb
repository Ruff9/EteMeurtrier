class CreateFilmTable < ActiveRecord::Migration
  def change
    create_table :films do |t|
    	t.string :titre
    	t.text 	 :code_embed
    	t.string :realisateur1
    	t.string :realisateur2
    	t.string :chef_operateur
    	t.string :avec1
    	t.string :avec2
    	t.string :annee
    end
  end
end
