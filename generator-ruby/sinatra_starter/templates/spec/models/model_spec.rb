require_relative "../../app/model/model"

RSpec.describe Model, :type => :model do
  describe "print" do
    subject { described_class.new }

    it "should return 0" do
      expect(subject.print).to eq "0"
    end
  end
end
