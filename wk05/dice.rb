require 'pry'

class Dice
  @total_array = []
  def self.roll(x) #When you put self. in front of the method, it because a Class Method
    @numbers = []
    x.times do
      @numbers << (rand(1..6) )
    end
    self
    return @numbers
  end

  def self.sum
    @total_array << @numbers
    numbers_total = 0
    @numbers.each do |n|
      numbers_total += n
    end

    @total_array << numbers_total
    return @total_array
  end

end
binding.pry
