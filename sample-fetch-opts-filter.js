/**
 * @fileoverview Example to filter the huge response body before passing it to the receiver.
 *
 * The new filter options has less memory footprint of Network Extension, it is
 * recommended to use the option when response body is larger than 512 KB.
 * For the data size less then 128 KB filter is not recommended.
 * The JSON file requested in this sample is about 20 MB.
 *
 * The original body in the filter script environment is the variable "body", and the
 * filter script should just return directly (synchronize) with the filtered result (as
 * a string). The returned result will be passed to the receiver as the new response body.
 * If the result is more than 16 KB, an error will be thrown.
 *
 * It is worth noting that the filter module is only for "filter" usage, no other APIs are supported.
 *
 * Since the sample JSON file is a little bit large, so the parsing process may take a while.
 *
 */

const url = 'https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json';

const bodyFilter = 'var result = JSON.parse(body); return JSON.stringify(result[167]);';

const myRequest = {
    url: url,
    opts:{'filter': bodyFilter}
};

$task.fetch(myRequest).then(response => {
    console.log(response.body);
    $notify("T", "S", response.body);
    $done();
}, reason => {
    $done();
    // reason.error
});
