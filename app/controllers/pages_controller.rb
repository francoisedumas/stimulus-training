class PagesController < ApplicationController
  def home
    if params[:date].present?
      @selected_date = params[:date]
    else
      @selected_date = "Select a day"
    end
  end

  def drum
  end

  def css_variables
  end
end
