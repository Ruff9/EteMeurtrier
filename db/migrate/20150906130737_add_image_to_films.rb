class AddImageToFilms < ActiveRecord::Migration
  def up
    add_attachment :films, :image
  end

  def down
    remove_attachment :films, :image
  end
end
