-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "secret" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'New User',
    "image" TEXT NOT NULL DEFAULT '/images/default-profile_image.png',
    "roles" TEXT[] DEFAULT ARRAY['member']::TEXT[],
    "permissions" TEXT[] DEFAULT ARRAY['default']::TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'New Event',
    "description" TEXT NOT NULL DEFAULT 'New Event Description',
    "image" TEXT NOT NULL DEFAULT '/images/default-banner-socis_event_plain',
    "date" TEXT NOT NULL DEFAULT 'No date provided',
    "location" TEXT NOT NULL DEFAULT 'No location provided',
    "perks" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "rsvps" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "pinned" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Club" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'New Club',
    "description" TEXT NOT NULL DEFAULT 'New Club Description',
    "image" TEXT NOT NULL DEFAULT '/images/default-banner-socis_club_plain',
    "events" TEXT[],
    "members" TEXT[],

    CONSTRAINT "Club_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_secret_key" ON "User"("secret");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Event_id_key" ON "Event"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Club_id_key" ON "Club"("id");
