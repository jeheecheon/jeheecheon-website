﻿using System;
using Infrastructure.DbContexts;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    [DbContext(typeof(MainContext))]
    [Migration("20240207105959_alter_get_post_likes_has_liked_function")]
    public partial class alter_get_post_likes_has_liked_function : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
DROP FUNCTION IF EXISTS get_post_likes_has_liked;
CREATE OR REPLACE FUNCTION get_post_likes_has_liked(target_post_id UUID, target_account_id UUID)
RETURNS TABLE (
	id UUID,
	title VARCHAR(50), 
	content TEXT, 
	uploaded_at TIMESTAMP WITH TIME ZONE,
	edited_at TIMESTAMP WITH TIME ZONE, 
	cover VARCHAR(256), 
	category_id VARCHAR(30),
	like_cnt BIGINT,
	has_liked BOOLEAN
) AS $$
BEGIN
	RETURN QUERY
	WITH likes_and_has_liked AS (
		SELECT 
			post_id, 
			COUNT(*) AS like_cnt,
			COUNT(DISTINCT CASE WHEN account_id = target_account_id
				THEN account_id END) > 0 AS has_liked
		FROM liked_post
		WHERE post_id = target_post_id
		GROUP BY post_id
	)
	SELECT 
		p.*,
		COALESCE(l.like_cnt, 0) AS like_cnt,
		COALESCE(l.has_liked, false) AS has_liked
	FROM (SELECT * FROM post WHERE post.id = target_post_id) as p
	LEFT JOIN likes_and_has_liked AS l ON p.id = l.post_id;
END;
$$ LANGUAGE plpgsql;	
            ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
DROP FUNCTION IF EXISTS get_post_likes_has_liked;
CREATE OR REPLACE FUNCTION get_post_likes_has_liked(target_post_id UUID, target_account_id UUID)
RETURNS TABLE (
	id UUID,
	title VARCHAR(50), 
	content TEXT, 
	uploaded_at TIMESTAMP WITH TIME ZONE,
	edited_at TIMESTAMP WITH TIME ZONE, 
	cover VARCHAR(256), 
	category_id VARCHAR(30),
	like_cnt BIGINT,
	has_liked BOOLEAN
) AS $$
BEGIN
	RETURN QUERY
	WITH likes_and_has_liked AS (
		SELECT 
			post_id, 
			COUNT(*) AS like_cnt,
			COUNT(DISTINCT CASE WHEN liked_post.account_id = target_account_id
				THEN liked_post.account_id END) > 0 AS has_liked
		FROM liked_post
		WHERE post_id = target_post_id
		GROUP BY post_id
	)
	SELECT 
		p.*,
		COALESCE(l.like_cnt, 0) AS like_cnt,
		l.has_liked
	FROM (SELECT * FROM post WHERE post.id = target_post_id) as p
	LEFT JOIN likes_and_has_liked AS l ON p.id = l.post_id;
END;
$$ LANGUAGE plpgsql;	
            ");
        }
    }
}
