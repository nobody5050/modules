#pragma once

#include <Arduino.h>
#include <VL53L1X.h>

#include "BaseDevice.h"
#include "Logger.h"

struct VL53L1XPayload_t {
  uint8_t valid;
  uint16_t dist;
};

namespace Devices {
namespace Builtin {
class VL53L1XDevice : public BaseDevice {
 public:
  VL53L1XDevice(const Configuration::Sensor& config) : BaseDevice(config) {
    _sensor.setBus(&WireInstance);
  }

  DeviceError_t initSensor(void) {
    _sensor.setTimeout(500);
    if (!_sensor.init()) {
      return {
          .errorType = DeviceErrorType_t::InitError,
          .additionalInformation = {1, 0, 0, 0},
      };
    }

    _sensor.setDistanceMode(VL53L1X::Long);
    _sensor.setMeasurementTimingBudget(50000);
    _sensor.startContinuous(50);

    SerialLogger.verbose("Done writing to VL53L1X");

    listenForEvent(Eventing::EventType::Enabled);

    return {
        .errorType = DeviceErrorType_t::None,
    };
  }

  std::optional<Eventing::Event> handleSubscribedEvent(
      const Eventing::Event& evt) override {
    // Handle your events here...
    SerialLogger.verbose("VL53L1X: got event: %d", evt.type);

    return std::nullopt;
  }

  uint8_t poll(uint8_t* buf) override {
    VL53L1XPayload_t payload;
    payload.dist = _sensor.read(true);
    payload.valid = 1;

    memcpy(buf, &payload, sizeof(payload));

    return sizeof(payload);
  }

 private:
  VL53L1X _sensor;
};
}  // namespace Builtin
}  // namespace Devices