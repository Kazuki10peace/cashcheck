class Calc < ApplicationRecord
  validates :ten_thousand, format: { with: /\A^[0-9]+$\z/ }
  validates :five_thousand, format: { with: /\A^[0-9]+$\z/ }
  validates :one_thousand, format: { with: /\A^[0-9]+$\z/ }
  validates :five_hundred, format: { with: /\A^[0-9]+$\z/ }
  validates :one_hundred, format: { with: /\A^[0-9]+$\z/ }
  validates :fifty, format: { with: /\A^[0-9]+$\z/ }
  validates :ten, format: { with: /\A^[0-9]+$\z/ }
  validates :five, format: { with: /\A^[0-9]+$\z/ }
  validates :one, format: { with: /\A^[0-9]+$\z/ }
end
