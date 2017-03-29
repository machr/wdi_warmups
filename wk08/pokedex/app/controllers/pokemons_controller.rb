class PokemonsController < ApplicationController

  def index
    @pokemons = Pokemon.all
  end

  def create
    pokemon = Pokemon.new
    pokemon.nickname = params[:nickname]
    pokemon.species = params[:species]
    pokemon.level = params[:level]
    pokemon.image_url = params[:image_url]
    if pokemon.save
      redirect_to '/'
    else
      render :new
    end
  end

end
