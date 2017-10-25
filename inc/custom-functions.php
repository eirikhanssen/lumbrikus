<?php 
/**
 * return array with attachment meta
 *
 * @param [type] $attachment_id
 * @return void
 */
function lumbrikus_get_attachment_meta( $attachment_id ) {

$attachment = get_post( $attachment_id );
return array(
    'alt' => get_post_meta( $attachment->ID, '_wp_attachment_image_alt', true ),
    'caption' => $attachment->post_excerpt,
    'description' => $attachment->post_content,
    'href' => get_permalink( $attachment->ID ),
    'src' => $attachment->guid,
    'title' => $attachment->post_title
	);
}


function lumbrikus_has_children() {
    global $post;

    $children = get_pages( array( 'child_of' => $post->ID ) );
    if( count( $children ) == 0 ) {
        return false;
    } else {
        return true;
    }
}

/**
 * find all pages that has page with $post_id as parent, and return a nav with links to them. If they have a fetured image, use that in the link.
 */
function lumbrikus_make_nav_with_image_links_to_children_pages($post_id) {
	$output ="<p>Post-id: <strong>" . $post_id ."</strong></p>";
	$output .= "<nav class=\"childpagelinks\">\n";
	$output .= "<ol>\n";
	$output .= "<li>links to children will come here....</li>";
	$output .= "</ol>\n";
	$output .= "</nav>\n";
	return $output;
}