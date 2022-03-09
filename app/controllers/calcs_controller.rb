class CalcsController < ApplicationController
  def index
    @calc = Calc.new
  end
end
