import { UserActivity } from "../generated/user_activities";

// --- Fake data generation ----------------------------------------------------

const USER_ID = "user-123-abc";
const SESSION_ID = "session-456-def";

// --- Example 1: A user starts planning a new trip ----------------------------

const tripCreatedEvent: UserActivity = UserActivity.create({
  userId: USER_ID,
  sessionId: SESSION_ID,
  appId: "travel-web",
  occurredAt: new Date(),
  eventName: "trip_created",
  category: "engagement",
  attributes: {
    destination: "Paris, France",
    trip_length_days: 10,
    departure_date: "2024-12-25",
  },
});

// --- Example 2: A user clicks a button ---------------------------------------

const buttonClickEvent: UserActivity = UserActivity.create({
  userId: USER_ID,
  sessionId: SESSION_ID,
  appId: "travel-web",
  occurredAt: new Date(),
  eventName: "button_click",
  category: "navigation",
  attributes: {
    button_id: "add_to_cart_button",
    page_url: "/flights/search",
  },
});

// --- Example 3: A user adds a restaurant to a trip -------------------------

const restaurantAddedEvent: UserActivity = UserActivity.create({
  userId: USER_ID,
  sessionId: SESSION_ID,
  appId: "travel-web",
  occurredAt: new Date(),
  eventName: "restaurant_added",
  category: "trip_planning",
  attributes: {
    restaurant_name: "Osteria Francescana",
    city: "Modena, Italy",
    reservation_date: "2025-01-18",
    number_of_guests: 2,
  },
});


