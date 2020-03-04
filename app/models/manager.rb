class Manager < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable

  ## -- VALIDATIONS
  validates :name, uniqueness: true, presence: true

  def avatar_url
    Manager::AvatarURL.(manager: self).result
  end
end
