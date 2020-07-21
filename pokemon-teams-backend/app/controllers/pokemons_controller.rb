class PokemonsController < ApplicationController

    def index
        pokemons = Pokemon.all
         
        render json: pokemons
    end

    def create
        pokemon = Pokemon.create(strong_params)
        pokemon.nickname = Faker::Name.first_name
        pokemon.species = Faker::Games::Pokemon.name
        pokemon.save
        render json: pokemon

    end

    def destroy
        pokemon = Pokemon.find(params[:id])
        pokemon.destroy

        render json:{}
    end
    
    
    private
    def strong_params
        params.require(:pokemon).permit(:nickname,:species,:trainer_id)
    end
end
