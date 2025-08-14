from sqlalchemy import Column, Integer, String, JSON
from database import Base

class FlightController(Base):
    __tablename__ = 'flight_controllers'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), unique=True)
    description = Column(String(255))

class FirmwareVersion(Base):
    __tablename__ = 'firmware_versions'
    id = Column(Integer, primary_key=True, index=True)
    controller_id = Column(Integer)
    version = Column(String(50))

class FirmwareOption(Base):
    __tablename__ = 'firmware_options'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), unique=True)
    type = Column(String(50))

class UserConfiguration(Base):
    __tablename__ = 'user_configurations'
    id = Column(Integer, primary_key=True, index=True)
    controller_id = Column(Integer)
    version_id = Column(Integer)
    selected_options = Column(JSON)