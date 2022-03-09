class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :name, presence: true
  PASSWORD_REGEX = /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]+\z/i.freeze
  validates_format_of :password, with: PASSWORD_REGEX
  AMOUNT_REGEX = /\A[0-999999]\z/i.freeze
  validates :amount,
            numericality: { presence: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 999_999,
                            only_integer: true }
end
