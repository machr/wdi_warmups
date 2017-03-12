require 'pry'

# create class Robot
class Robot
  def initialize
    @name = create_name
    3.times do
      puts @name
    end
  end

  def reset
    @name = create_name
    3.times do
      puts @name
    end
  end

  def create_name
    name = ""

    # or ('AA'..'ZZ').to_a.sample
    2.times do
      name << ( ('A'..'Z').to_a.sample )
      name.chomp
    end

    # or (000..999).to_s
    3.times do
      name << rand(0..9).to_s
      name.chomp
    end

    return name
  end

end

binding.pry
# generate name - 2 consonants 3 numbers
