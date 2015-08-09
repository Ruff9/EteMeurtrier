ActiveAdmin.register Film do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :titre, :code_embed, :realisateur1, :realisateur2, :chef_operateur, :avec1, :avec2, :annee
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if resource.something?
#   permitted
# end


end
