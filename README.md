# valdymas-college-admin-dashboard

## Validate Nigerian Phone numbers using REGEX

The regular expression /^[0|\+234][789](01)\d{8}$/ defines the pattern for a Nigerian phone number:

    ^  indicates the start of the string
    (0|\+234)  matches either 0 or +234
    [789]  matches any of the digits 7, 8, or 9
    [01]  matches either 0 or 1
    \d{8}  matches any 8 digits
    $  indicates the end of the string

This regular expression will match phone numbers in the format 0xxxxxxxxx or +234xxxxxxxxx, where x is any digit.

You can customize the regular expression to meet your specific requirements. For example, you can add more digits to the pattern to match longer phone numbers, or add additional constraints to the pattern to further restrict the valid phone numbers.
