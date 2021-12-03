class PagesController < ApplicationController
  def home
  end

  def drum
  end

  def clock
  end

  def css_variables
  end

  def calendar
    if params[:date].present?
      @selected_date = params[:date]
    else
      @selected_date = "Select a day"
    end
  end
end
