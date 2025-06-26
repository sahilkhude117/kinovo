import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Baloo, sans-serif' }}>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-yellow-50 p-6 rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Baloo, sans-serif' }}>
              About Kinovo
            </h1>
            <p className="text-gray-600">Empowering children's learning through creative, printable educational resources</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Baloo, sans-serif' }}>Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kinovo was born from a simple belief: every child deserves access to engaging, high-quality educational materials 
              that make learning fun and effective. We recognized that parents and educators needed convenient, affordable access to professionally 
              designed worksheets and activities that could supplement traditional learning methods.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our team of experienced educators, child development specialists, and designers work together to create content that not only 
              educates but also inspires creativity and critical thinking in young minds. Each worksheet and activity bundle is carefully 
              crafted to align with developmental milestones and educational standards.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kinovo is run by Vishvjit Ghorpade, who is passionate about making quality educational resources accessible to families and 
              educators worldwide. With a commitment to innovation and excellence, we continue to expand our collection of engaging learning materials 
              that help children develop essential skills while having fun.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FBB406' }}>
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Baloo, sans-serif' }}>Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To make quality educational resources accessible to every parent and educator, fostering a love of learning 
                in children worldwide through innovative, engaging printable materials.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#13C0FA' }}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Baloo, sans-serif' }}>Our Values</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe in educational excellence, accessibility, creativity, and the power of play-based learning. 
                Every product we create is designed with these core values in mind.
              </p>
            </div>

            {/* <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FBB406' }}>
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Baloo, sans-serif' }}>Our Impact</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Over 50,000 families and 1,000 educators have trusted Kinovo to enhance their children's learning journey. 
                We're proud to be part of countless success stories.
              </p>
            </div> */}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Baloo, sans-serif' }}>What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Expert-Designed Content</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Our worksheets are created by certified educators and child development specialists with years of classroom experience.
                </p>
                
                <h4 className="font-semibold text-gray-800 mb-2">Age-Appropriate Learning</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Every resource is carefully designed to match specific developmental stages and learning objectives.
                </p>
                
                <h4 className="font-semibold text-gray-800 mb-2">Instant Access</h4>
                <p className="text-gray-600 text-sm">
                  Download and print immediately after purchase - no waiting, no shipping costs, no delays.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Comprehensive Bundles</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Our activity bundles cover multiple subjects and skills, providing weeks of engaging learning material.
                </p>
                
                <h4 className="font-semibold text-gray-800 mb-2">Regular Updates</h4>
                <p className="text-gray-600 text-sm mb-4">
                  We continuously add new content based on seasonal themes, educational trends, and customer feedback.
                </p>
                
                <h4 className="font-semibold text-gray-800 mb-2">Affordable Pricing</h4>
                <p className="text-gray-600 text-sm">
                  Quality education shouldn't be expensive. Our bundles offer exceptional value compared to individual worksheet purchases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs