ActiveAdmin.register Film do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
	permit_params :titre, :image, :video_url, :description, :realisateur1, :realisateur2, :chef_operateur, :avec1, :avec2, :annee

	form :html => { :enctype => "multipart/form-data" } do |f|
   	f.inputs do
	    f.input :titre
	    f.input :image, :as => :file
	    f.input :video_url
	    f.input :description
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
