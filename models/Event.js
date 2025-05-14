
  const upcomingGamingEventsSouthAfrica = [
    {
      name: "38th GAUTENG Championships (Board games, Card games, Esports, wargames)",
      location: "TBA, Gauteng",
      dates: "May 17 - 18, 2025"
    },
    {
      name: "24th WESTERN CAPE Championships (Board games, Card games, Esports, wargames)",
      location: "TBA, Western Cape",
      dates: "May 31 - June 1, 2025"
    },
    {
      name: "SA School Championships (Board games, Card games, Esports, wargames)",
      location: "TBA",
      dates: "June 14 - 15, 2025"
    },
    {
      name: "5th SA School Online Championships (Esports)",
      location: "Online",
      dates: "June 28, 2025"
    },
    {
      name: "26th KWAZULU NATAL Championships (Board games, Card games, Esports, wargames)",
      location: "TBD, KwaZulu-Natal",
      dates: "July 19 - 20, 2025"
    },
    {
      name: "5th KWAZULU NATAL Online Championships (Esports)",
      location: "Online",
      dates: "July 26, 2025"
    },
    {
      name: "17th FREE STATE Championships / 5th FREE STATE Online Championships",
      location: "TBD, Free State",
      dates: "August 16 - 17, 2025"
    },
    {
      name: "Comic Con Africa",
      location: "Johannesburg Expo Centre (Nasrec), Johannesburg",
      dates: "August 28 - 31, 2025"
    },
    {
      name: "25th NORTH WEST Championships (Board games, Card games, Esports, wargames)",
      location: "TBD, North West",
      dates: "August 30 - 31, 2025"
    },
    {
      name: "17th EASTERN CAPE Championships / 3rd EASTERN CAPE Online Championships (Board games, Card games, Esports, wargames)",
      location: "TBD, Eastern Cape",
      dates: "September 13 - 14, 2025"
    },
    {
      name: "8th LIMPOPO Championships / 4th LIMPOPO Online Championships",
      location: "TBD, Limpopo",
      dates: "September 27 - 28, 2025"
    },
    {
      name: "4th NORTH WEST Online Championships (Esports)",
      location: "Online",
      dates: "October 11, 2025"
    },
    {
      name: "rAge Expo 2025",
      location: "Johannesburg Expo Centre (Nasrec), Johannesburg",
      dates: "December 5 - 7, 2025"
    },
    {
      name: "NAG LAN",
      location: "Johannesburg Expo Centre (Nasrec), Johannesburg (within rAge Expo)",
      dates: "December 5 - 7, 2025"
    },
    {
      name: "Playtopia",
      location: "Homecoming Centre, Cape Town",
      dates: "December 5 - 6, 2025"
    },
    {
      name: "34th S A NATIONAL Championships / 3rd Online SA NATIONAL Championships (Board games, Card games, Esports, wargames)",
      location: "TBD",
      dates: "December 6 - 7, 2025"
    },
    {
      name: "SiGMA Africa 2025 Conference",
      location: "Sun Exhibits – GrandWest, Cape Town",
      dates: "March 10 - 12, 2025"
    }
  ];

  // Pass the array to the EJS template
  const container = document.querySelector('.container');
  let eventsHTML = '<h1>Upcoming Gaming Events in South Africa</h1><p>Check out the exciting gaming events happening soon!</p>';

  if (upcomingGamingEventsSouthAfrica && upcomingGamingEventsSouthAfrica.length > 0) {
    upcomingGamingEventsSouthAfrica.forEach(event => {
      eventsHTML += `
        <div class="card">
          <h3>${event.name}</h3>
          <p>${event.dates} | ${event.location}</p>
        </div>
      `;
    });
  } else {
    eventsHTML += '<p>No upcoming gaming events currently listed.</p>';
  }

  container.innerHTML = eventsHTML;