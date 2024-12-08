FROM php:8.1-fpm

# Install dependencies
RUN apt-get update && apt-get install -y libssl-dev libpng-dev libjpeg-dev libfreetype6-dev zip git

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

WORKDIR /var/www

COPY . .

RUN composer install

CMD ["php-fpm"]
