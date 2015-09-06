class FilmsController < ApplicationController
	
	def index
		@films = Film.all
	end

	def create
		@film = Film.create(film_params)
		@film.save
	end

	private

  def film_params
    params.require(:film).permit(:titre, :video_url, :realisateur1, :realisateur2, :chef_operateur, :avec1, :avec2, :annee, :image)
  end
end