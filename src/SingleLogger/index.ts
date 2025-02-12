import { Logger } from "../index.js";

class SingleLogger {
  private logger: Logger;

  constructor(key: string) {
    this.logger = new Logger("acnp-shared-component-idempotency", "acnp-shared-component-idempotency");
    if (key) {
      this.logger.setCorrelationId(key);
    }
  }

  info(msg, payload) {
    this.logger.info(msg, payload);
  }

  debug(msg, payload) {
    this.logger.debug(msg, payload);
  }

  warn(msg, payload) {
    this.logger.warn(msg, payload);
  }

  error(msg, payload) {
    this.logger.error(msg, payload);
  }
}

export { SingleLogger };