RSpec.describe DrillsController do

  describe '#index' do
    let(:user) { users(:user_1) }

    it 'returns drills for the given practice_id' do
      practice = user.practices.create!(name: 'Practice', total_time: 90)
      drill_1 = practice.drills.create!(name: 'Drill 1', weight: 5)
      drill_2 = practice.drills.create!(name: 'Drill 2', weight: 10)

      # should not see other_practice drills
      other_practice = user.practices.create!(name: 'Other', total_time: 1)
      other_practice.drills.create!(name: 'Drill 3', weight: 99)

      get(:index, drills: { practice_id: practice.id }, format: :json)

      drills = JSON.parse(response.body)
      expect(drills).to match_array [drill_1, drill_2].map(&:as_json)
    end
  end

end
