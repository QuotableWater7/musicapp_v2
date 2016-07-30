RSpec.describe DrillsController do

  let(:user) { users(:user_1) }

  before(:each) { login_as(user) }

  describe '#index' do

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
      practice = user.practices.create!(name: 'Practice', total_time: 1)
      drill_params = { practice_id: practice.id, name: 'Drill 1', weight: 99 }
      post(:create, drill: drill_params, format: :json)

      drill = JSON.parse(response.body)
      expect(drill).to eq Drill.find_by(drill_params).as_json
    end

  end

  describe '#update' do

    it 'updates the given drill' do
      practice = user.practices.create!(name: 'Practice', total_time: 1)
      drill = practice.drills.create!(name: 'Drill 1', weight: 99)

      drill_params = { id: drill.id, name: 'Drill One', weight: 2 }

      expect do
        put(:update, format: :json, id: drill.id, drill: drill_params)
      end.to change { drill.reload.name }.from('Drill 1').to('Drill One')

      expect(JSON.parse(response.body)['name']).to eq 'Drill One'
    end

  end

  describe '#delete' do
    it 'deletes a drill with the given ID' do
      practice = user.practices.create!(name: 'bloop', total_time: 25)
      drill = practice.drills.create!(name: 'drill')

      expect do
        post(:destroy, format: :json, id: drill.id)
      end.to change(Drill, :count).by(-1)

      expect(JSON.parse(response.body)['deleted_drill']).to eq drill.id
      expect(Drill.find_by_id(drill.id)).to be nil
    end
  end

end
