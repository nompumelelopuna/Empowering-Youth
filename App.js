import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';

const COLORS = {
  maroon: '#8B1235',
  blue: '#145A9C',
  green: '#16834A',
  gold: '#E7B522',
  white: '#FFFFFF',
  light: '#F5F7FA',
  grey: '#667085',
  dark: '#1F2937',
};

const courses = [
  {
    id: 1,
    name: 'First Aid Training',
    type: 'Six Month',
    duration: '6 Months',
    price: 1200,
    image:
      'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=900&q=80',
    description:
      'Learn essential first-aid skills for everyday emergencies.',
  },
  {
    id: 2,
    name: 'Sewing & Design',
    type: 'Six Month',
    duration: '6 Months',
    price: 900,
    image:
      'https://images.unsplash.com/photo-1594409292414-4c9a7e1a9b16?auto=format&fit=crop&w=900&q=80',
    description:
      'Develop practical sewing and basic clothing design skills.',
  },
  {
    id: 3,
    name: 'Gardening & Landscaping',
    type: 'Six Month',
    duration: '6 Months',
    price: 950,
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80',
    description:
      'Learn practical gardening, maintenance and landscaping skills.',
  },
  {
    id: 4,
    name: 'Cooking & Hospitality',
    type: 'Six Month',
    duration: '6 Months',
    price: 1100,
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80',
    description:
      'Build useful cooking, food preparation and hospitality skills.',
  },
  {
    id: 5,
    name: 'Basic Computer Skills',
    type: 'Six Week',
    duration: '6 Weeks',
    price: 600,
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    description:
      'Learn essential computer and digital skills for work and everyday life.',
  },
  {
    id: 6,
    name: 'Customer Service',
    type: 'Six Week',
    duration: '6 Weeks',
    price: 750,
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
    description:
      'Develop communication and customer service skills.',
  },
  {
    id: 7,
    name: 'Home Management',
    type: 'Six Week',
    duration: '6 Weeks',
    price: 700,
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    description:
      'Learn practical home organisation and management skills.',
  },
  {
    id: 8,
    name: 'Life Skills',
    type: 'Six Week',
    duration: '6 Weeks',
    price: 650,
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    description:
      'Build confidence, communication and everyday life skills.',
  },
];

export default function App() {
  const [screen, setScreen] = useState('home');
  const [courseType, setCourseType] = useState('Six Month');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [people, setPeople] = useState('1');
  const [discount, setDiscount] = useState('10');
  const [vat, setVat] = useState('15');
  const [calcCourse, setCalcCourse] = useState(courses[0]);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const filteredCourses = courses.filter(
    course => course.type === courseType
  );

  const money = amount => `R ${amount.toFixed(2)}`;

  // ---------------- HOME ----------------

  const Home = () => (
    <ScrollView style={styles.container}>
      <View style={styles.logoArea}>
        <Text style={styles.logoText}>EMPOWERING</Text>
        <Text style={styles.logoYouth}>YOUTH</Text>
      </View>

      <Text style={styles.tagline}>
        Skills • Training • Opportunities • Futures
      </Text>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80',
        }}
        style={styles.heroImage}
      />

      <Text style={styles.mainHeading}>Learn. Build. Grow.</Text>

      <Text style={styles.description}>
        Empowering Youth provides practical skills and training opportunities
        to help people develop skills for a better future.
      </Text>

      <TouchableOpacity
        style={styles.blueButton}
        onPress={() => setScreen('courses')}
      >
        <Text style={styles.buttonText}>VIEW COURSES</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.goldButton}
        onPress={() => setScreen('fees')}
      >
        <Text style={styles.goldButtonText}>CALCULATE FEES</Text>
      </TouchableOpacity>

      <View style={styles.benefits}>
        <Text style={styles.benefit}>🎓{'\n'}Training</Text>
        <Text style={styles.benefit}>🌱{'\n'}Growth</Text>
        <Text style={styles.benefit}>💼{'\n'}Skills</Text>
        <Text style={styles.benefit}>⭐{'\n'}Success</Text>
      </View>

      <BottomNavigation />
    </ScrollView>
  );

  // ---------------- COURSES ----------------

  const Courses = () => (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Our Courses</Text>

      <Text style={styles.description}>
        Choose a training programme that suits your goals.
      </Text>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tab,
            courseType === 'Six Month' && styles.activeTab,
          ]}
          onPress={() => setCourseType('Six Month')}
        >
          <Text
            style={[
              styles.tabText,
              courseType === 'Six Month' && styles.activeTabText,
            ]}
          >
            Six Month
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            courseType === 'Six Week' && styles.activeTab,
          ]}
          onPress={() => setCourseType('Six Week')}
        >
          <Text
            style={[
              styles.tabText,
              courseType === 'Six Week' && styles.activeTabText,
            ]}
          >
            Six Week
          </Text>
        </TouchableOpacity>
      </View>

      {filteredCourses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}

      <BottomNavigation />
    </ScrollView>
  );

  // ---------------- COURSE CARD ----------------

  const CourseCard = ({ course }) => (
    <View style={styles.card}>
      <Image source={{ uri: course.image }} style={styles.cardImage} />

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{course.name}</Text>

        <Text style={styles.smallText}>
          Duration: {course.duration}
        </Text>

        <Text style={styles.price}>{money(course.price)}</Text>

        <TouchableOpacity
          style={styles.blueSmallButton}
          onPress={() => {
            setSelectedCourse(course);
            setScreen('details');
          }}
        >
          <Text style={styles.buttonText}>VIEW DETAILS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // ---------------- COURSE DETAILS ----------------

  const CourseDetails = () => (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Course Details</Text>

      <Image
        source={{ uri: selectedCourse.image }}
        style={styles.detailImage}
      />

      <Text style={styles.pageTitle}>{selectedCourse.name}</Text>

      <Text style={styles.price}>
        {money(selectedCourse.price)}
      </Text>

      <Text style={styles.info}>
        Duration: {selectedCourse.duration}
      </Text>

      <Text style={styles.sectionTitle}>About this course</Text>

      <Text style={styles.description}>
        {selectedCourse.description}
      </Text>

      <Text style={styles.sectionTitle}>What you will learn</Text>

      <Text style={styles.description}>
        • Practical skills and techniques{'\n'}
        • Confidence for everyday situations{'\n'}
        • Skills that can support employment{'\n'}
        • Useful knowledge for everyday life
      </Text>

      <TouchableOpacity
        style={styles.maroonButton}
        onPress={() => setScreen('registration')}
      >
        <Text style={styles.buttonText}>REGISTER NOW</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  // ---------------- FEES ----------------

  const Fees = () => {
    const numberOfPeople = Math.max(1, Number(people) || 1);
    const discountRate =
      Math.max(0, Number(discount) || 0) / 100;
    const vatRate = Math.max(0, Number(vat) || 0) / 100;

    const coursePrice = calcCourse.price * numberOfPeople;
    const discountAmount = coursePrice * discountRate;
    const subtotal = coursePrice - discountAmount;
    const vatAmount = subtotal * vatRate;
    const total = subtotal + vatAmount;

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.pageTitle}>Calculate Fees</Text>

        <Text style={styles.label}>Course</Text>

        <View style={styles.selector}>
          <Text style={styles.selectorText}>
            {calcCourse.name} - {money(calcCourse.price)}
          </Text>
        </View>

        <Text style={styles.label}>Number of People</Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={people}
          onChangeText={setPeople}
        />

        <Text style={styles.label}>Discount (%)</Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={discount}
          onChangeText={setDiscount}
        />

        <Text style={styles.label}>VAT (%)</Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={vat}
          onChangeText={setVat}
        />

        <Text style={styles.sectionTitle}>Fee Breakdown</Text>

        <View style={styles.resultBox}>
          <Text>Course Price: {money(coursePrice)}</Text>
          <Text>Discount: -{money(discountAmount)}</Text>
          <Text>Subtotal: {money(subtotal)}</Text>
          <Text>VAT: {money(vatAmount)}</Text>

          <View style={styles.total}>
            <Text style={styles.totalText}>TOTAL</Text>
            <Text style={styles.totalText}>
              {money(total)}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.maroonButton}
          onPress={() =>
            Alert.alert(
              'Fees Calculated',
              `Total amount: ${money(total)}`
            )
          }
        >
          <Text style={styles.buttonText}>CALCULATE</Text>
        </TouchableOpacity>

        <BottomNavigation />
      </ScrollView>
    );
  };

  // ---------------- REGISTRATION ----------------

  const Registration = () => (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Course Registration</Text>

      <Text style={styles.label}>Name *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Surname *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your surname"
        value={surname}
        onChangeText={setSurname}
      />

      <Text style={styles.label}>Email *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Phone Number *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={styles.label}>Selected Course</Text>

      <View style={styles.selector}>
        <Text>
          {selectedCourse
            ? selectedCourse.name
            : 'No course selected'}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.goldButton}
        onPress={() => {
          if (!name || !surname || !email || !phone) {
            Alert.alert(
              'Error',
              'Please complete all required fields.'
            );
            return;
          }

          Alert.alert(
            'Registration Successful',
            'Thank you! Your registration has been submitted.'
          );

          setScreen('confirmation');
        }}
      >
        <Text style={styles.goldButtonText}>REGISTER</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  // ---------------- CONTACT ----------------

  const Contact = () => (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Contact Us</Text>

      <Text style={styles.description}>
        We would love to hear from you.
      </Text>

      <Text style={styles.contact}>
        📍 Johannesburg, Gauteng
      </Text>

      <Text style={styles.contact}>
        📞 0XX XXX XXXX
      </Text>

      <Text style={styles.contact}>
        ✉️ info@empoweringyouth.co.za
      </Text>

      <View style={styles.map}>
        <Text style={styles.mapText}>
          Johannesburg Map
        </Text>
      </View>

      <Text style={styles.label}>Name *</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email *</Text>

      <TextInput
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Message *</Text>

      <TextInput
        style={[styles.input, styles.message]}
        multiline
        value={message}
        onChangeText={setMessage}
      />

      <TouchableOpacity
        style={styles.maroonButton}
        onPress={() => {
          if (!name || !email || !message) {
            Alert.alert(
              'Error',
              'Please complete all required fields.'
            );
            return;
          }

          Alert.alert(
            'Message Sent',
            'Thank you! We will get back to you.'
          );

          setMessage('');
        }}
      >
        <Text style={styles.buttonText}>SEND MESSAGE</Text>
      </TouchableOpacity>

      <BottomNavigation />
    </ScrollView>
  );

  // ---------------- CONFIRMATION ----------------

  const Confirmation = () => (
    <View style={styles.confirmation}>
      <Text style={styles.check}>✓</Text>

      <Text style={styles.pageTitle}>
        Thank You!
      </Text>

      <Text style={styles.description}>
        Your information has been submitted successfully.
      </Text>

      <TouchableOpacity
        style={styles.goldButton}
        onPress={() => setScreen('home')}
      >
        <Text style={styles.goldButtonText}>
          BACK TO HOME
        </Text>
      </TouchableOpacity>
    </View>
  );

  // ---------------- NAVIGATION ----------------

  const BottomNavigation = () => (
    <View style={styles.navigation}>
      <TouchableOpacity onPress={() => setScreen('home')}>
        <Text style={styles.navText}>⌂{'\n'}Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setScreen('courses')}>
        <Text style={styles.navText}>▣{'\n'}Courses</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setScreen('fees')}>
        <Text style={styles.navText}>▤{'\n'}Fees</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setScreen('contact')}>
        <Text style={styles.navText}>☎{'\n'}Contact</Text>
      </TouchableOpacity>
    </View>
  );

  // ---------------- SCREEN ROUTING ----------------

  if (screen === 'home') {
    return (
      <SafeAreaView style={styles.safe}>
        <Home />
      </SafeAreaView>
    );
  }

  if (screen === 'courses') {
    return (
      <SafeAreaView style={styles.safe}>
        <Courses />
      </SafeAreaView>
    );
  }

  if (screen === 'details') {
    return (
      <SafeAreaView style={styles.safe}>
        <CourseDetails />
      </SafeAreaView>
    );
  }

  if (screen === 'fees') {
    return (
      <SafeAreaView style={styles.safe}>
        <Fees />
      </SafeAreaView>
    );
  }

  if (screen === 'registration') {
    return (
      <SafeAreaView style={styles.safe}>
        <Registration />
      </SafeAreaView>
    );
  }

  if (screen === 'contact') {
    return (
      <SafeAreaView style={styles.safe}>
        <Contact />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <Confirmation />
    </SafeAreaView>
  );
}

// ---------------- STYLES ----------------

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
  },

  logoArea: {
    alignItems: 'center',
    marginTop: 25,
  },

  logoText: {
    fontSize: 28,
    fontWeight: '900',
    color: '#111111',
  },

  logoYouth: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.maroon,
  },

  tagline: {
    textAlign: 'center',
    color: COLORS.blue,
    fontSize: 13,
    marginVertical: 10,
  },

  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 18,
    marginVertical: 10,
  },

  mainHeading: {
    fontSize: 27,
    fontWeight: '900',
    color: COLORS.maroon,
    textAlign: 'center',
    marginTop: 10,
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    color: COLORS.dark,
    marginVertical: 10,
  },

  blueButton: {
    backgroundColor: COLORS.blue,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 6,
  },

  goldButton: {
    backgroundColor: COLORS.gold,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 6,
  },

  maroonButton: {
    backgroundColor: COLORS.maroon,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 12,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '800',
  },

  goldButtonText: {
    color: COLORS.maroon,
    fontSize: 15,
    fontWeight: '800',
  },

  benefits: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.light,
    borderRadius: 15,
    padding: 12,
    marginVertical: 15,
  },

  benefit: {
    textAlign: 'center',
    fontSize: 11,
    color: COLORS.dark,
  },

  pageTitle: {
    fontSize: 27,
    fontWeight: '900',
    color: COLORS.maroon,
    marginTop: 20,
    marginBottom: 8,
  },

  tabs: {
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    borderRadius: 12,
    padding: 4,
    marginVertical: 15,
  },

  tab: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    borderRadius: 9,
  },

  activeTab: {
    backgroundColor: COLORS.blue,
  },

  tabText: {
    fontWeight: '700',
    color: COLORS.dark,
  },

  activeTabText: {
    color: COLORS.white,
  },

  card: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#E4E7EC',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 18,
  },

  cardImage: {
    width: '100%',
    height: 160,
  },

  cardContent: {
    padding: 14,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.dark,
  },

  smallText: {
    color: COLORS.grey,
    marginTop: 5,
  },

  price: {
    color: COLORS.maroon,
    fontSize: 18,
    fontWeight: '900',
    marginVertical: 7,
  },

  blueSmallButton: {
    backgroundColor: COLORS.blue,
    padding: 11,
    borderRadius: 9,
    alignItems: 'center',
  },

  detailImage: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    marginTop: 10,
  },

  sectionTitle: {
    color: COLORS.maroon,
    fontSize: 19,
    fontWeight: '800',
    marginTop: 18,
    marginBottom: 5,
  },

  info: {
    fontSize: 15,
    marginVertical: 5,
    color: COLORS.dark,
  },

  label: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.dark,
    marginTop: 12,
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 10,
    padding: 13,
    fontSize: 15,
    backgroundColor: COLORS.white,
  },

  selector: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 10,
    padding: 14,
  },

  selectorText: {
    color: COLORS.dark,
  },

  resultBox: {
    backgroundColor: COLORS.light,
    padding: 18,
    borderRadius: 15,
    marginTop: 10,
  },

  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#D0D5DD',
    paddingTop: 12,
    marginTop: 12,
  },

  totalText: {
    color: COLORS.maroon,
    fontSize: 18,
    fontWeight: '900',
  },

  contact: {
    fontSize: 15,
    marginVertical: 6,
  },

  map: {
    height: 160,
    backgroundColor: '#E8EEF5',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },

  mapText: {
    color: COLORS.blue,
    fontWeight: '800',
  },

  message: {
    minHeight: 120,
    textAlignVertical: 'top',
  },

  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#E4E7EC',
    paddingVertical: 13,
    marginTop: 25,
    marginHorizontal: -18,
  },

  navText: {
    textAlign: 'center',
    color: COLORS.grey,
    fontSize: 12,
    lineHeight: 19,
  },

  confirmation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  check: {
    backgroundColor: COLORS.green,
    color: COLORS.white,
    width: 80,
    height: 80,
    borderRadius: 40,
    textAlign: 'center',
    fontSize: 55,
    lineHeight: 80,
    marginBottom: 20,
  },
});
