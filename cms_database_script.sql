-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema cms
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema cms
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cms` DEFAULT CHARACTER SET latin1 ;
USE `cms` ;

-- -----------------------------------------------------
-- Table `cms`.`articles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cms`.`articles` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `content` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `cms`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `cms`.`comments` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `content` TEXT NOT NULL,
  `article_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_comments_articles_idx` (`article_id` ASC) VISIBLE,
  CONSTRAINT `fk_comments_articles`
    FOREIGN KEY (`article_id`)
    REFERENCES `cms`.`articles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
