const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
// const LocalStrategy = require('passport-local').Strategy;
const { JWT_SECRET } = require('../config');

const { 
  admin: Admin,
  mentors: Mentor,
  students: Student,
  courses: Course
} = require('../models');

// JSON WEB TOKENS STRATEGY
passport.use('admin', new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: JWT_SECRET
}, async (payload, done) => {
  try {
    const admin = await Admin.findOne({ where: { id: payload.sub } });
    // const course = await Course.findOne({ where: { mentorId: payload.sub } });
    if (!admin) {
      return done(null, false);
    }
    done(null, admin);
  } catch(error) {
    done(error, false);
  }
}));

passport.use('mentor', new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: JWT_SECRET
}, async (payload, done) => {
  try {
    const mentor = await Mentor.findOne({ where: { id: payload.sub } });
    // const course = await Course.findOne({ where: { mentorId: payload.sub } });
    if (!mentor) {
      return done(null, false);
    }
    done(null, mentor);
  } catch(error) {
    done(error, false);
  }
}));

passport.use('student', new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: JWT_SECRET
}, async (payload, done) => {
  try {
    const student = await Student.findOne({ where: { id: payload.sub } });
      if (!student) {
      return done(null, false);
    }
    done(null, student);
  } catch(error) {
    done(error, false);
  }
}));