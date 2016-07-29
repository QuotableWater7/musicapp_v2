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

  describe '#create' do

    it 'creates a drill for the given practice' do
      user = users(:user_1)
      practice = user.practices.create!(name: 'Practice', total_time: 1)
      drill_params = { practice_id: practice.id, name: 'Drill 1', weight: 99 }
      post(:create, drill: drill_params, format: :json)

      drill = JSON.parse(response.body)
      expect(drill).to eq Drill.find_by(drill_params).as_json
    end

  end

end
