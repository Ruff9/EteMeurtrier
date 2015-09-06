ActiveAdmin.register Film do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
	permit_params :titre, :image, :code_embed, :realisateur1, :realisateur2, :chef_operateur, :avec1, :avec2, :annee

	form :html => { :enctype => "multipart/form-data" } do |f|
   	f.inputs do
	    f.input :titre
	    f.input :image, :as => :file
	    f.input :code_embed
	    f.input :realisateur1
	    f.input :realisateur2
	    f.input :chef_operateur
	    f.input :avec1
	    f.input :avec2
	    f.input :annee
	  end
	 	f.actions
 end

 index do
 	column "Image" do |film|
	  image_tag film.image.url
	end
 	column :titre
 	column :annee
 	actions
 end
end
