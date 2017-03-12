require 'pry'

class Scrabble
# ADD letters for scoring
  @scoring = {
   1 => ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], # 1
   2 => ['D', 'G'],                                         # 2
   3 => ['B', 'C', 'M', 'P' ],                              # 3
   4 => ['F', 'H', 'V', 'W', 'Y'],                          # 4
   5 => ['K'],                                              # 5
   8 => ['J', 'X'],                                         # 8
   9 => ['Q', 'Z']                                          # 10
  }
  def self.score(input)
    total_score = 0
    input_string = input.upcase.split('')

    input_string.each do |letter|
      @scoring.each do |key, value|
        if value.include?( letter )
          total_score += key
        end
      end
    end
    
    return total_score
  end
end
binding.pry
